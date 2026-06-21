import { test, expect } from '@playwright/test';
import { UploadPage } from '../../pages/UploadPage';

test('upload file', async ({ page }) => {

    const uploadPage = new UploadPage(page);

    await uploadPage.open();

    await uploadPage.uploadFile();

    await expect(
        page.locator('h3')
    ).toContainText(
        'File Uploaded!'
    );

});

test('uploaded filename displayed', async ({ page }) => {

    const uploadPage = new UploadPage(page);

    await uploadPage.open();

    await uploadPage.uploadFile();

    await expect(
        uploadPage.getUploadedFileName()
    ).toContainText(
        'upload-file.txt'
    );

});