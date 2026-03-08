const fs = require('fs');
const path = require('path');

async function test() {
    try {
        const filePath = path.join(process.cwd(), 'src/z-data/categories.json');
        console.log("Checking categories at:", filePath);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const categories = JSON.parse(fileContents).categories;
        console.log("Found", categories.length, "categories.");

        for (const cat of categories) {
            const catPath = path.join(process.cwd(), `src/z-data/category/${cat.slug}.json`);
            if (fs.existsSync(catPath)) {
                const data = JSON.parse(fs.readFileSync(catPath, 'utf8'));
                console.log(`- ${cat.name}: ${data.medicines.length} medicines`);
            } else {
                console.log(`- ${cat.name}: FILE MISSING (${cat.slug})`);
            }
        }
    } catch (e) {
        console.error("DEBUG ERROR:", e);
    }
}

test();
