import { db } from 'src/lib/db'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

