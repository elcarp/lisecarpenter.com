import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	console.log(JSON.stringify(allPostsData))
	return (
		<Layout home>
			{/* Keep the existing code here */}

			{/* Add this <section> tag below the existing <section> tag */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={`${utilStyles.headingLg} text-white text-center`}>
					Blog
				</h2>

				<ul className={`${utilStyles.list} text-white text-center`}>
					{allPostsData.map(({ id, date, title }) => (
						<Link href={`posts/${id.slice(0, -3)}`}>
							<li
								className={`${utilStyles.listItem} ${'cursor-pointer'}`}
								key={id}>
								{title}
								<br />
								{id}
								<br />
								{date}
							</li>
						</Link>
					))}
				</ul>
			</section>
		</Layout>
	)
}
