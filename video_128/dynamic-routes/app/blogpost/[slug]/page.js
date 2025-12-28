export default async function Page({ params }) {
    throw new Error('Simulated fetch error')
  const { slug } = await params
//   fetch your post data based on the slug
let languages = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'Go', 'Swift', 'Kotlin', 'PHP', 'TypeScript'];
if (languages.includes(slug)) {
  return <div>My Post: {slug}</div>
} else {
  return <div>Post Not Found</div>
}
}