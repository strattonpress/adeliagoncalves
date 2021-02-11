import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Author = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Author</title>
			</Helmet>
			<div className={`${styles['ata-banner']}`}>
				<img src="/ata-banner.jpg" alt={`${JSONData.authorname}`} />
			</div>
			<div className={`${styles.main} ${styles['gray-bg']}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>About me</h2>
					<div className={`flex flex-item-even ${styles['about-the-author-content']}`}>
						<div className={`${styles['mid-space']}`}>
							{JSONData.abouttheauthor[0].left.map((data) => {
								return <p>{data}</p>;
							})}
							<p>
								Adelia worked in a laboratory for a pharmaceutical company, she also worked as a plaster
								technician for a Dental Technician. She worked in admin and customer service, at an
								asparagus farm, in a factory, in sales and marketing, retail as well as in the community
								sector as an interpreter and commercial artist.
							</p>

							<p>
								Adelia volunteered in church as a song and worship leader, a Sunday school teacher and
								volunteered in five different schools for over 20+ years and evangelises and volunteers
								for the homeless and where her hearts assignment would lead her.
							</p>

							<p>
								She plays guitar, sings gospel songs, enjoys art, sewing, reading, acting, loves her
								family and friends, enjoys sharing a picnic with anyone. Adelia Castro Tavares is a
								twin, her younger twin a male, named Delio Castro Tavares. Both given the names of her
								father and her auntie.
							</p>

							<p>
								<img src="/Father.png" alt="Father" className={`${styles['father-img']}`} />Her father
								Delio Castro Tavares is Jewish African from (Cabo Verde) moved to Timor in the mid
								1950’s.
							</p>

							<p>
								Her mother Irene Tavares, an East Timorese mixed with Asian Macau. Together they raised
								fourteen children plus her adopted sibling to which they immigrated to Australia in 1975
								minus a sister who lived with Adelia’s auntie and her eldest sibling who was not
								forgotten, still in East Timor, when two political parties Fretilin and UDT undisputedly
								caused an Indonesian military interference that became an Invasion for the civil war in
								December of 1975.<img
									src="/Mother.png"
									alt="Mother"
									className={`${styles['mother-img']}`}
								/>
							</p>

							<p>
								Unfortunately, soon it was evident, by the bombings and strong military presence. The
								civilians suddenly realised it was not a fight or disagreement but both parties were
								threatening the lives of everyone with aggression which eventually the Indonesians
								political party Apodete was supposed to be one party that would be the in the middle.
								The Indonesian Army were in Timor supposed to settle the fight but it became a war zone
								that lasted for decades. A war that had torn thousands of people’s lives including the
								death toll of approximately 250,000 people. About one third of the original population
								reported from a journal of the Human Rights in East Timor, ETIS.
							</p>

							<p>
								However, with politics you can never just blame one sole nation but others that are also
								involved.
							</p>

							<p>
								This was reported quoted from the Washington Post, ‘The commission's report cites a Dec.
								6, 1975, meeting in Jakarta -- the day before the invasion -- in which Indonesia's
								former ruler, President Suharto, asked then-President Gerald R. Ford and then-Secretary
								of State Henry A. Kissinger for their "understanding" if his government took "rapid or
								drastic action" against East Timor, according to a declassified account of the
								conversation first made public in 2001.
							</p>

							<p>
								Ford assured Suharto that "we will understand and will not press you on the issue," the
								documents say. Kissinger pressed Suharto to delay an invasion until the president had
								returned to the United States. "It is important that whatever you do succeeds quickly,"
								Kissinger is reported to have said.
							</p>

							<p>
								<a
									href="http://www.washingtonpost.com/wp-dyn/content/article/2006/01/24/AR2006012401688.html?noredirect=on"
									target="_blank"
									rel="noopener noreferrer"
								>
									http://www.washingtonpost.com/wp-dyn/content/article/2006/01/24/AR2006012401688.html?noredirect=on
								</a>
							</p>

							<p>
								Australian navy vessels were available in Australian sea to rescue and bring them out of
								East Timor but first they had to reach the ship in a smaller fishing boat. It was a
								benevolent thing to do which was better than leaving them all to die under an evil
								political greedy system of terrorist. Adelia and her family were fortunate and blessed
								to have escaped the sword and wrath on that day of doom.
							</p>
						</div>
						<div>
							{JSONData.abouttheauthor[0].right.map((data) => {
								return <p>{data}</p>;
							})}
							<p>
								The holocaust of executions, looting, rape, killing of civilians, deception, torture and
								abuse of human rights was a shocking revelation. The occupation of the military force
								was excessive which included electric shocks, drowning in water, suffocation, beatings
								with fists, clubs and rifles, machetes etc. The authorities that controlled them,
								oppressed and controlled the East Timorese people from territory to territory. They
								suffered violently by sword and by famine, by involuntary disappearances, detentions,
								starvation and relocation of the civilians led into the resettling camps, subjected them
								to diseases like malaria and TB if they were not killed beforehand. There were many
								massacres, detainees, arbitrary arrests and unfortunately the reports of torture were
								invisible to the rest of the world. Access by international and domestic organizations
								to East Timor were restricted, preventing effective human rights to see what was going
								on with the illegal treatment and torture.
							</p>

							<p>
								Fortunately, the first photographic picture of evidence showing the violations in East
								Timor only emerged in 1980 because up until then it was effectively hidden due to a
								blockade of information. The photograph had a group of Indonesian troops surrounding the
								decapitated heads, done as a trophy no doubt to create terror. There were more and more
								photographs printed.
							</p>

							<p>
								Because of the war, the Australian Government which was the Whitlam Government at the
								time opened the doors to the East Timorese people as refugees to migrate to Australia,
								it was only fair as East Timor helped the Australian Army in the second world war
								against the Japanese.
							</p>

							<p>
								The Tavares family along with many Timorese families were devastated when they arrived
								in Darwin to face another crisis, the aftermath of a cyclone. This time it was a
								destructive force of nature not done by human hands, ‘Cyclone Tracie.’ Another blow,
								after running from town to town seeking for food, water, shelter. Adelia then 7 faced
								another sort of homelessness, at least thankful, there were no more bullets, grenades
								and bombs which was a contrast. Although surprised and confused amongst the ruins there
								was peace and safety. Now homeless amongst many who were displaced from their homes
								because Cyclone Tracie had ripped through Darwin and destroyed the whole city. They were
								only allowed to stay aboard the ship and experienced luxury for a very short week, and
								thankful for the little pleasure even if it only lasted for less than a week. They were
								then given a choice to settle and reside in Sydney, Adelaide, Queensland, western
								Australia and Darwin.
							</p>

							<p>
								The family now safe in Australia fearing the worst yet praying fervently for their
								brother and the situation in East Timor together as a family they attended church held
								services at home and believed in the promises of God and thanked Him for His protection
								and provisions. The volunteers and donations provided by the Australian public, Red
								Cross, St Vincent de Paul, Salvation Army and Church groups reached out to them.
								Donating goods and services plus the Department of Housing which opened the Hostels in
								Cabramatta, Villawood, Coogee in Sydney and throughout Australia.
							</p>

							<p>
								After a few years with the help of Red Cross they located her brother Helio, and made it
								possible to reunite him with the family and after following through with plans with the
								immigration department her brother finally arrived in Sydney in 1982, when Adelia was
								sixteen years of age.
							</p>

							<p>
								The family lived in Orchard Hills and went to a local school in a small town in the
								western suburbs of Sydney, Australia on a beautiful property on 5 acres with tight
								squeeze in large 6- bedroom house. The garage housed the boys and the house served the
								girls with the parents in the master bedroom with an ensuite.
							</p>

							<p>
								They faithfully attended church and grew up with hardworking parents. One of Adelia’s
								favourite stories in the Bible is the book of Esther and she believes that through the
								persecution God is still in control and she is thankful to be alive for such a time as
								this.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Author;
