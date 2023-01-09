import Float from '@/atoms/Float';
import HTMLContent from '@/atoms/HTMLContent';
import ThumbNail from '@/molecules/ThumbNail';

const BlogContent = ({ blog }) => (
  <>
    <Float>
      <ThumbNail imageUrl={blog.imageUrl} altText={blog.title} size="400" />
    </Float>
    <HTMLContent htmlContent={blog.content} />
  </>
);

export default BlogContent;
