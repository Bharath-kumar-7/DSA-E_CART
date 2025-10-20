/**
 * DSA Implementation: Binary Tree
 * Used for: Category hierarchy (Electronics > Phones, Laptops, etc.)
 */

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

class TreeNode {
  data: Category;
  left: TreeNode | null;
  right: TreeNode | null;
  children: TreeNode[];

  constructor(data: Category) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.children = []; // For n-ary tree support
  }
}

export class CategoryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Insert root category
  insertRoot(category: Category): void {
    this.root = new TreeNode(category);
  }

  // Add child category to parent
  addChild(parentId: string, category: Category): boolean {
    if (!this.root) return false;

    const parentNode = this.findNode(this.root, parentId);
    if (parentNode) {
      const newNode = new TreeNode(category);
      parentNode.children.push(newNode);
      
      // Also maintain binary tree structure for demonstration
      if (!parentNode.left) {
        parentNode.left = newNode;
      } else if (!parentNode.right) {
        parentNode.right = newNode;
      }
      return true;
    }
    return false;
  }

  // Find node by category id (DFS)
  private findNode(node: TreeNode | null, id: string): TreeNode | null {
    if (!node) return null;
    if (node.data.id === id) return node;

    // Search in children
    for (const child of node.children) {
      const found = this.findNode(child, id);
      if (found) return found;
    }
    return null;
  }

  // Get all categories (level-order traversal)
  getAllCategories(): Category[] {
    if (!this.root) return [];

    const result: Category[] = [];
    const queue: TreeNode[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.data);
      queue.push(...node.children);
    }

    return result;
  }

  // Get subcategories of a parent
  getSubcategories(parentId: string): Category[] {
    if (!this.root) return [];

    const parentNode = this.findNode(this.root, parentId);
    if (!parentNode) return [];

    return parentNode.children.map(child => child.data);
  }

  // In-order traversal (for binary tree structure)
  inOrderTraversal(node: TreeNode | null = this.root, result: Category[] = []): Category[] {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
