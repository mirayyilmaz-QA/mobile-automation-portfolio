class DragPage {

    get dragMenuIcon() { return $('~Drag'); }
    get dragPiece() { return $('~drag-l1'); }
    get dropZone() { return $('~drop-l1'); }

    async openDragScreen() {
        await this.dragMenuIcon.waitForDisplayed({ timeout: 10000 });
        await this.dragMenuIcon.click();
    }

    async dragAndDropElement() {
        const source = await this.dragPiece;
        const target = await this.dropZone;

        // coordinates for the center of both elements
        const sourceLocation = await source.getLocation();
        const sourceSize = await source.getSize();
        const targetLocation = await target.getLocation();
        const targetSize = await target.getSize();

        const startX = sourceLocation.x + (sourceSize.width / 2);
        const startY = sourceLocation.y + (sourceSize.height / 2);
        const endX = targetLocation.x + (targetSize.width / 2);
        const endY = targetLocation.y + (targetSize.height / 2);

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 }, // Wait to "pick up" the piece
                    { type: 'pointerMove', duration: 1500, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    }
}

export default new DragPage();