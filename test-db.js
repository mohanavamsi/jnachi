import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.databaseId);

async function check() {
  const q = query(collection(db, 'leads'));
  const snap = await getDocs(q);
  snap.forEach(doc => {
    console.log(doc.id, doc.data());
  });
  process.exit(0);
}
check().catch(console.error);
