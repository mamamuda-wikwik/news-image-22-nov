// main.ts — grader for the news-image-20261122 entry.
// Validates entry.png (1024x1024 PNG, <= 1 MiB) and copies it to the
// output directory. Stdlib only (node:fs, node:path).
// Output dir: argv[2] > MAKEFUN_OUTPUT_DIR env > /output.
// Exit 0 on success, exit 1 with "error: ..." on failure.
import * as fs from "node:fs";
import * as path from "node:path";

const MAX_BYTES = 1024 * 1024; // 1 MiB
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(msg: string): never {
  console.error("error: " + msg);
  process.exit(1);
}

function main(): void {
  const outDir =
    process.argv[2] || process.env.MAKEFUN_OUTPUT_DIR || "/output";

  // entry.png lives next to this script (the repo root).
  const scriptDir = process.argv[1]
    ? path.dirname(path.resolve(process.argv[1]))
    : process.cwd();
  const src = path.join(scriptDir, "entry.png");

  let buf: Buffer;
  try {
    buf = fs.readFileSync(src);
  } catch {
    fail("cannot read entry.png");
  }

  if (buf.length > MAX_BYTES) {
    fail(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
  }
  if (buf.length < 8 || !buf.subarray(0, 8).equals(PNG_SIG)) {
    fail("entry.png is not a PNG file");
  }

  // Walk the PNG chunks: [length:4][type:4][data:length][crc:4].
  let off = 8;
  let width = 0;
  let height = 0;
  let sawIHDR = false;
  let sawIDAT = false;
  let sawIEND = false;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString("latin1", off + 4, off + 8);
    if (off + 12 + len > buf.length) {
      fail(
        `chunk ${type} at offset ${off} claims ${len} bytes, past end of file`,
      );
    }
    if (type === "IHDR") {
      if (len !== 13) {
        fail(`IHDR chunk length is ${len}, expected 13`);
      }
      width = buf.readUInt32BE(off + 8);
      height = buf.readUInt32BE(off + 12);
      sawIHDR = true;
    } else if (type === "IDAT") {
      sawIDAT = true;
    } else if (type === "IEND") {
      sawIEND = true;
      break;
    }
    off += 12 + len;
  }

  if (!sawIHDR) {
    fail("no IHDR chunk");
  }
  if (width !== 1024 || height !== 1024) {
    fail(`entry.png is ${width}x${height}, expected 1024x1024`);
  }
  if (!sawIDAT) {
    fail("no IDAT chunk");
  }
  if (!sawIEND) {
    fail("no IEND chunk");
  }

  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, "entry.png");
  fs.writeFileSync(out, buf);
  console.log(`entry.png: ${width}x${height}, ${buf.length} bytes -> ${out}`);
}

main();
