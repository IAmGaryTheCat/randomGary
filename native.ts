const allowedDomains = ["api.garythe.cat", "cdn.garythe.cat", "minky.materii.dev", "api.thecatapi.com"];

export async function getImageBuffer(_, url: string): Promise<Buffer | null> {
    try {
        const parsedUrl = new URL(url);

        if (!allowedDomains.includes(parsedUrl.hostname)) {
            return null;
        }

        const response = await fetch(parsedUrl.href);

        if (!response.ok) {
            return null;
        }

        const arrayBuffer = await response.arrayBuffer();
        return Buffer.from(arrayBuffer);

    } catch (error) {
        return null;
    }
}
