/*jshint esversion:8*/

import fs from 'fs';
const fsPromises = fs.promises;

export async function listDir() {
  try {
    return await fsPromises.readdir('html-pages');
  } catch (err) {
    console.error('Error occured while reading directory!', err);
  }
}
listDir();


