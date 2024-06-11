
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
export function copyTextToClipboard(text: string, onCopied?: () => void): void {
  void navigator.clipboard.writeText(text);
  if (onCopied) onCopied();
}


