
import { getCollection, type ContentEntryMap } from "astro:content";

const getFilteredCollection = async (collection: keyof ContentEntryMap) => Promise.all((await getCollection(collection))
    .filter(post => post.data.draft !== true)
    .map(async (post) => {
        const { headings } = await post.render();
        const h2Headings = headings.filter(heading => heading.depth === 2);
        return { ...post, data: { ...post.data, headings: h2Headings } }

    }));

const services = await getFilteredCollection('services');
const sectors = await getFilteredCollection('sectors');
const courses = await getFilteredCollection('courses');
const products = await getFilteredCollection('products');
const consultants = await getFilteredCollection('consultants');
const docs = await getFilteredCollection('docs');

export { services, sectors, courses, products, consultants, docs };