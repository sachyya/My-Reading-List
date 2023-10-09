export default function BookList({books} ) {
	if ( ! books ) {
		return null;
	}

	return books.map( ( book ) => (
		<div>
			<h2>{ book.title.rendered }</h2>
			<img src={ book.featured_image_src }/>
			<div dangerouslySetInnerHTML={ { __html: book.content.rendered } }></div>
		</div>
	) )
}
