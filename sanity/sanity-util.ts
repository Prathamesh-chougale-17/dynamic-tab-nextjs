import { client } from "./client";
import { groq } from "next-sanity";
import { buildQuery } from "./buildQuery";

export interface Code {
    title: string;
    slug: string;
    Code: JSX.Element;
}

export interface Tournament {
    eventname: string;
    event: string;
    countdown: number;
    startdate: string;
    player: number;
    prizepool: number;
    organizer: string;
    participationfee: string;
    location: string;
    gametype: string;
}
// export async function getProject({ query, category, page }: GetResourcesParams): Promise<Project[]> {

//     return client.fetch(groq`${buildQuery({
//         type: 'projects',
//         query,
//         category,
//         page: parseInt(page),
//     })}{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`
//     )
// }

// export async function getProjectBySlug(slug: string): Promise<Project> {
//     return client.fetch(groq`*[_type == "projects" && slug.current == "${slug}"][0]{
//         title,
//         _id,
//         githubLink,
//         subtitle,
//         "image": projectImage.asset->url,
//         views,
//         "slug":slug.current,
//         category,
//         description,
//         techStack,
//         liveLink
//       }`,
//         { slug }
//     )
// }



export async function getCode(): Promise<Code[]> {
    return client.fetch(groq`*[_type == "codecontent"]{
        title,
        "slug":slug.current,
        Code
      }`
    )
}
