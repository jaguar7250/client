import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'

function HomePage() {
  const [auth,setAuth]=useAuth();
  return (
    <Layout title={"shop now"}>
    <div>HomePage</div>
   {/* <pre>{JSON.stringify(auth)}</pre> */}
    </Layout>
  )
}

export default HomePage