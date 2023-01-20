import { request, gql, GraphQLClient } from 'graphql-request';
import { Result } from 'postcss';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getResources = async () => {
  const query = gql`
  query GetResources {
    resources {
      resourceTitle
      resourceLink
      resourceDescription
    }
  }  
  `

  const result = await request(graphqlAPI, query);

  return result.resources;
};

export const getRecentNews = async () => {
  const query = gql`
  query GetRecentNews {
    recents(last: 2
      skip: 2) {
      newsDate
      newsText {
        html
      }
      newsTitle
      slug
    }
  }  
  `
  const result = await request(graphqlAPI, query);

  return result.recents;
};


export const getAbout = async () => {
  const query = gql`
  query About {
    abouts {
      welcome
      about
      photo {
        url
        width
        height
      }
      photoInfo
    }
  }  
  `
  const result = await request(graphqlAPI, query);

  return result.abouts;
};

export const getRecentAircrafts = async () => {
  const query = gql`
  query GetRecentAircrafts{
    aircrafts(last: 4, orderBy: publishedAt_ASC, where: {forSale: true}) {
    title
    publishedAt
    featuredImage {
      url(transformation: {image: {resize: {height: 250, width: 250}}})
    }
    slug
    category {
      category
    }
  }}
  `

  const result = await request(graphqlAPI, query);

  return result.aircrafts
};


export const getAircrafts = async () => {
  const query = gql`
    query MyQuery {
      aircraftsConnection {
        edges {
          node {
            title
            description {
              html
            }
            avionics {
              html
            }
            interior {
              html
            }
            exterior {
              html
            }
            gallery {
              url
            }
            airframe {
              html
            }
            featuredImage {
              url
            }
            forSale
            histo {
              html
            }
            price
            slug
            logs {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.aircraftsConnection.edges;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const searchAircfrat = async () => {
  const query = gql`
    query searchAircraft {
      aircrafts(where: {forSale: true
      }, , orderBy: createdAt_ASC, last: 5000) {
        id
        title
        featuredImage {
          url
        }
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.aircrafts;
}




export const getTestimonials = async () => {
  const query = gql`
  query getTestimonials{
    testimonials(last: 10) {
      name
      comment
    }
  }`

  const result = await request(graphqlAPI, query);

  return result.testimonials;
}

export const getAirplanesForSale = async () => {
  const query = gql`
  query getForSale{
    categories(
      where: {aircrafts_some: {AND: {forSale: true}}}
      orderBy: order_ASC) 
  {
    id
    category
    aircrafts(
      where: {forSale: true}
      orderBy: updatedAt_ASC) {
      title
      slug
      forSale
      featuredImage {
        url(transformation: {image: {resize: {height: 70, width: 70}}})
      }
    }
  }
  }`

  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const getForSale = async () => {
  const query = gql`
  query getForSale{
    aircrafts(
      where: {forSale: true}
      orderBy: updatedAt_ASC) {
      title
      slug
      forSale
      featuredImage {
        url
      }
    }
  }
  `
  const result = await request(graphqlAPI, query);

  return result.forSale
}

export const getRecents = async () => {
  const query = gql`
  query getRecents{
    recents {
      newsDate
      newsText {
        html
      }
      newsTitle
      photo {
        url
      }
      slug
    }
  }
  `
  const result = await request(graphqlAPI, query);

  return result.recents
}

export const getAircraftDetails = async (slug) => {
  const query = gql`
  query getAircraft($slug: String!) {
    aircraft(where: {slug: $slug}) {
      airframe {
        html
      }
      avionics {
        html
      }
      description {
        html
      }
      featuredImage {
        url(transformation: {image: {resize: {height: 1000, width: 1000}}})
      }
      histo {
        html
      }
      gallery {
        url(transformation: {image: {resize: {height: 1000, width: 1000}}})
      }
      slug
      title
      price
      exterior {
        html
      }
      interior {
        html
      }
      logs {
        url
      }
      videoUrl
      
    }
  }`;

  const result = await request(graphqlAPI, query, { slug });

  return result.aircraft;
}

export const getNewsDetails = async (slug) => {
  const query = gql`
  query getNews($slug: String!) {
    recent(where: {slug: $slug}) {
     
          newsDate
          newsText {
            html
          }
          newsTitle
          photo {
            url
          }
          slug
        }
    
  }`;

  const result = await request(graphqlAPI, query, { slug });

  return result.recent;
}

export const getTitle = async () => {
  const query = gql`
  query GetTitle{
    aircrafts(where: {forSale: true}) {
    title
    
  }}
  `

  const result = await request(graphqlAPI, query);

  return result.aircrafts
};

