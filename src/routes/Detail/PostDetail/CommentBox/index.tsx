import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"
import GiscusComments from "src/components/GiscusComments"

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import("./Cusdis")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <GiscusComments />
    </div>
  )
}

export default CommentBox