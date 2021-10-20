import { FunctionComponent } from 'react'
import { TreeNode } from '~interfaces/interview'

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

// function Node(val?: number, left?: TreeNode, right?: TreeNode): TreeNode {
//   return {
//     val: val === undefined ? 0 : val,
//     left: left === undefined ? null : left,
//     right: right === undefined ? null : right
//   }
// }

function isSameNode(nodeA: TreeNode, nodeB: TreeNode): boolean {
  return (
    (nodeA === null && nodeB === null) ||
    (nodeA &&
      nodeB &&
      nodeA.val === nodeB.val &&
      // recursivley checking for left node
      ((nodeA.left === null && nodeB.left === null) ||
        (nodeA.left && nodeB.left && isSameNode(nodeA.left, nodeB.left))) &&
      // recursivley checking for right node
      ((nodeA.right === null && nodeB.right === null) ||
        (nodeA.right && nodeB.right && isSameNode(nodeA.right, nodeB.right))))
  ) // && nodeA.right === nodeB.right
}

const Projects: FunctionComponent = () => {
  var c = new TreeNode(9)
  var d = new TreeNode(3)
  var a = new TreeNode(0, c, c)
  var b = new TreeNode(0, d, a)

  var z = new TreeNode(4, a, b)
  var y = new TreeNode(4, c, b)

  var nodeA = new TreeNode(1, y, y) // Node(1, null, b)
  var nodeB = new TreeNode(1, z, y)

  console.log('-------- extending tests -------- ')
  console.log(nodeA)
  console.log(nodeB)
  console.log(isSameNode(nodeA, nodeB))
  //   isSameNode(nodeA, nodeB)

  return <div></div>
}

export default Projects
