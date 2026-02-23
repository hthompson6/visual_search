import { s3, write, S3Client } from "bun";

const client = new S3Client({
    accessKeyId: "key",
    secretAccessKey: "secret",
    bucket: "bucket-name"
});


export function fetchPresigned() {};


