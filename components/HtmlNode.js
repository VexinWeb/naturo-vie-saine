import React from "react";

const HtmlNode = ({ tag, html }) => {
	const Tag = tag;
	return <Tag dangerouslySetInnerHTML={{ __html: html }}></Tag>;
};

export default HtmlNode;