import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import cover from "../../assets/cover.jpg"

export function MainPage() {
    return <Layout>
        <Hero heroImage={cover}/>
    </Layout>
}