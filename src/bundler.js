const fs = require('fs')
const babylon = require('babylon')
const traverse = require('@babel/traverse').default

let ID = 0

/**
 * 收集依赖
 */
const createAsset = (filename) => {
    // 1. 读取文件
    const content = fs.readFileSync(filename, 'utf-8')
    // console.log(content);

    // 2. 生成AST
    const ast = babylon.parse(content, { sourceType: 'module' })
    // console.log(ast);

    // es6模块是静态的，所以需要提前收集依赖
    const dependencies = []

    // 3. AST -> JSON
    traverse(ast, {
        // 获取type为ImportDeclaration的node
        ImportDeclaration: ({ node }) => {
            // console.log(node);
            dependencies.push(node.source.value)
        }
    })

    // console.log(dependencies);
    // 4. 返回结果，
    // 至此，我们可以便利依赖生成依赖关系图了
    const id = ID++
    return {
        id,
        filename,
        dependencies
    }
}

/**
 * 创建依赖关系图
 */
const createGraph = (entry) => {
    // 1. 获取依赖
    const mainAsset = createAsset(entry)
    console.log(mainAsset);

    // 2. 遍历依赖 B/DFS
    const queue = [] 
    

}

const graph = createGraph('../example/entry.js')
console.log(graph);
