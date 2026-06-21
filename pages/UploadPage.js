import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class UploadPage {

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(
            'https://the-internet.herokuapp.com/upload'
        );
    }

    async uploadFile() {
        const filePath = path.resolve(__dirname, '../fixtures/upload-file.txt');

        await this.page.locator('#file-upload')
            .setInputFiles(filePath);

        await this.page.locator('#file-submit')
            .click();
    }

    getUploadedFileName() {
        return this.page.locator('#uploaded-files');
    }

}
