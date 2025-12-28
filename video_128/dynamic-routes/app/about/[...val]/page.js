export default async function Page({ params }) {
        // Get the value from the params object
        // that corresponds to the [...val] dynamic route segment
        // for example, if the URL is /about/a/b/c,
        // then params.val will be ['a', 'b', 'c']
        const {val} = await params;
        console.log (val);
    return <div>I am about page check console</div>
}