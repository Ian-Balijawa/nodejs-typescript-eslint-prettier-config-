<<<<<<< HEAD
async function main(): Promise<string> {
  console.log('Main')
  return new Promise((r, j) => {
    setTimeout(() => {
      r('Hello World!')
    }, 1000) // 1s
  })
=======
async function main() {
  console.log('Hello there Mom and Dad!!!')
>>>>>>> 09bedb9ac8a5b0bbd4729e107c7be2662c5ca737
}

async function runMain() {
  const Hello = await main()
  return Hello
}

runMain()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
