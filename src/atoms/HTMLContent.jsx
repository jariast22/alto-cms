const HTMLContent = ({ htmlContent }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
);

export default HTMLContent;
