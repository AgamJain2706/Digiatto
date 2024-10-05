import Dropform from '../../components/common/Dropform'
import Blogs from '../../components/servicepages/blogpage/Blogs'
import Insights from '../../components/servicepages/blogpage/Insights'
import Post from '../../components/servicepages/blogpage/Post'
import Topics from '../../components/servicepages/blogpage/Topics'

function Blogpage() {
    return (
        <>
            <Insights />
            <Topics />
            <Post />
            <Blogs />
            <Dropform />
        </>
    )
}

export default Blogpage