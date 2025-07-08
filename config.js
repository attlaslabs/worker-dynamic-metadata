export const config = {
  domainSource: "https://95377dcc-6454-4c23-8e96-c106c2b84546.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "^/c/[^/]+",
          metaDataEndpoint: "https://ofwppfqdauuyxblgkips.functions.supabase.co/chat-meta"
      }
  ]
};
