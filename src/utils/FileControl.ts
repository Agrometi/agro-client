class FileController {
  async convertFileToBase64Str(file: File): Promise<string> {
    return new Promise<string>((resolve, _) => {
      try {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = (e) => resolve(e.target?.result?.toString() || "");
      } catch (error) {
        console.log(error);
      }
    });
  }

  async convertMultipleFilesToBase64Str(
    files: Array<File>
  ): Promise<Array<string>> {
    return Promise.all(
      files.map(async (file) => this.convertFileToBase64Str(file))
    );
  }

  convertBase64StrToFile(base64Str: string): File {
    const base64Url = base64Str.split(";base64,")[1];
    const mimeType = base64Str
      .slice(base64Str.indexOf("data:"), base64Str.indexOf(";base64,"))
      .replace("data:", "");

    const byteCharacters = atob(base64Url);
    const byteCharactersArray = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteCharactersArray[i] = byteCharacters.charCodeAt(i);
    }

    const bytesArray = new Uint8Array(byteCharactersArray);

    const blob = new Blob([bytesArray], { type: mimeType });

    const file = new File([blob], this.generateRandomFileName(32), {
      type: mimeType,
    });

    return file;
  }

  convertMultipleBase64StrToFile(base64Strings: Array<string>): Array<File> {
    return base64Strings.map((base64Str) =>
      this.convertBase64StrToFile(base64Str)
    );
  }

  generateRandomFileName(length?: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const timestamp = Date.now();

    const getRandomNumber = () => Math.floor(Math.random() * characters.length);

    let result = "";

    const randomFileNameLength = length || 32;

    for (let i = 0; i < randomFileNameLength * 2 + 1; i++) {
      const randomIndex = getRandomNumber();

      if (i === Math.floor(randomFileNameLength / 2)) result += "_";
      else result += characters.charAt(randomIndex);
    }

    return `${result}_${timestamp}`;
  }
}

const FileControl = new FileController();

export default FileControl;
