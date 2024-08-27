require("dotenv").config();
export const PORT: string | number = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || "development";

export const HASH_SALT_ROUNDS: number = parseInt(
  process.env.HASH_SALT_ROUNDS || "10"
);

// minio config
export const MINIO_CONFIG = {
  endPoint: process.env.MINIO_ENDPOINT || "",
  port: parseInt(process.env.MINIO_PORT || "9000"),
  useSSL: process.env.MINIO_USE_SSL === "true" ? true : false,
  rootUser: process.env.MINIO_ROOT_USER || "",
  rootPassword: process.env.MINIO_ROOT_PASSWORD || "",
  bucketName: process.env.MINIO_BUCKET_NAME || "",
  publicHost: process.env.MINIO_PUBLIC_ENDPOINT || "",
  policy: {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: {
          AWS: ["*"],
        },
        Action: ["s3:GetBucketLocation", "s3:ListBucket"],
        Resource: [`arn:aws:s3:::${process.env.MINIO_BUCKET_NAME || ""}`],
      },
      {
        Effect: "Allow",
        Principal: {
          AWS: ["*"],
        },
        Action: ["s3:GetObject"],
        Resource: [`arn:aws:s3:::${process.env.MINIO_BUCKET_NAME || ""}/*`],
      },
    ],
  },
};
