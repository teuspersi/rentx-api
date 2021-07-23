/* eslint-disable import/prefer-default-export */
import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  await fs.promises.unlink(filename);
};
