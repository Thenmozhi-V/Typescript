function readFile(filePath: string): string {
    if (filePath !== 'valid-file.txt') {
      throw new Error('File not found');
    }
    return 'File content';
  }
  
  try {
    const fileContent = readFile('invalid-file.txt');
    console.log(`File content: ${fileContent}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
  }