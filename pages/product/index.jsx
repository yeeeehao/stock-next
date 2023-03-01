// import Head from "next/head";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Home({ stock }) {
//   function deleteProduct(id) {
//     fetch(`/api/stock/products/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // alert("Deleting " + id)
//         window.location.reload(false);
//       });
//   }

//   return (
//     <>
//       <Head>
//         <title>Products</title>
//       </Head>
//       <h1>Products</h1>
//       <table>
//         <tbody>
//           {stock.map((product) => {
//             return (
//               <tr key={product._id}>
//                 <td>
//                   <Link href={`/product/${product._id}`}>
//                     {product.code} {product.name}
//                   </Link>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteProduct(product._id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <p></p>
//     </>
//   );
// }
// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/stock/products/`);
//   const stock = await res.json();
//   // console.debug('stock 1', stock)
//   return { props: { stock } };
// }
