export function TitleComponent({ depth, title, hashOption }) {
    if (depth == 1) {
        return <h1 className="title"><span>{title}</span></h1>
    }
    if (depth == 2) {
        return <h2 className="title"><span>{title} <a id={hashOption.id} href={`#${hashOption.id}`}>#</a></span></h2>
    }
    return (
        <h3 className='title'>{title}</h3>
    )
}