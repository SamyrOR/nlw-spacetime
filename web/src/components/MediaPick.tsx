"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export function MediaPick() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;
    if (!file) return;
    const previewURL = URL.createObjectURL(file[0]);
    setPreview(previewURL);
  }
  return (
    <>
      <input
        type="file"
        name="coverUrl"
        onChange={onFileSelect}
        id="media"
        className="invisible h-0 w-0"
        accept="image/*"
      />
      {preview && (
        <Image
          src={preview}
          className="aspect-video w-full rounded-lg object-cover"
          width={300}
          height={300}
          alt=""
        />
      )}
    </>
  );
}
