import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { constructor, inicioServerProps } from "../types/inicio"
import fetchApi from "@/lib/fetchApi"
import legacy from "@/config/actions/legacy"

const serverSide = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<inicioServerProps>> => {
  try {
    const content = constructor()
    const apiContent = await fetchApi.get(legacy.home.inicio)

    if (!apiContent.success) throw new Error()

    content.banners = apiContent.data.banners
    content.links = apiContent.data.links
    content.publicidade = apiContent.data.publicidade

    return {
      props: content
    }
  } catch (error: any) {
    return {
      props: constructor()
    }
  }
}

export default serverSide