export const handleError = (error: any) => {
  // Just dummy implementation for now
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
    };
  }
};
