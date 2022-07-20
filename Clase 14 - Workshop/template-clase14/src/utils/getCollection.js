import { getDocs, query, collection} from "firebase/firestore";
import { db } from "../firebase/config";

const getCollection = async (colexion) => {
    const q = query(collection(db, colexion));
    const querySnapshot = await getDocs(q);
    const productos = []
    querySnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() })
    });
    return productos
}

export default getCollection;