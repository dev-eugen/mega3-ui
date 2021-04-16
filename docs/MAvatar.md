#MAvatar

##example

<m-avatar color="green" name="asd asd" size="lg" status="lg"></m-avatar>
<m-avatar color="green" name="asd asd" size="md" status="md"></m-avatar>
<m-avatar color="green" name="asd asd" size="sm" status="sm"></m-avatar>
<m-avatar color="red" name="asd asd" size="lg" status="lg"></m-avatar>
<m-avatar color="red" name="asd asd" size="md" status="md"></m-avatar>
<m-avatar color="red" name="asd asd" size="sm" status="sm"></m-avatar>
<m-avatar color="gray" name="asd asd" size="lg" status="lg"></m-avatar>
<m-avatar color="gray" name="asd asd" size="md" status="md"></m-avatar>
<m-avatar color="gray" name="asd asd" size="sm" status="sm"></m-avatar>
<m-avatar color="red" name="asd asd" size="lg" status="lg" rounded></m-avatar>
<m-avatar color="green" name="asd asd" size="md" status="md " rounded></m-avatar>
<m-avatar color="gray" name="asd asd" size="sm" status="sm" rounded></m-avatar>

##props

 props: {
    color: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    status: {
      type: String,
      default: "md",
    },
  },