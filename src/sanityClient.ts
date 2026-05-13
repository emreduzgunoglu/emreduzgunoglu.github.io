import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'tjd9yegs', // Sizin Sanity projenizin ID'si
  dataset: 'production',
  useCdn: true, // Hızlı yükleme için CDN kullan
  apiVersion: '2023-05-03', // Geçerli bir tarih girilebilir
});
