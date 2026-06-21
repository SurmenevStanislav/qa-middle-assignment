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
        await this.page.locator('#file-upload')
            .setInputFiles('fixtures/upload-file.txt');

        await this.page.locator('#file-submit')
            .click();
    }

    getUploadedFileName() {
        return this.page.locator('#uploaded-files');
    }

}
