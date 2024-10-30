export default function formatDate (timestamp) {
    const data = new Date(+timestamp);
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const day = (data.getDate()).toString().padStart(2, '0');
    return `${data.getFullYear()}-${month}-${day}`
}