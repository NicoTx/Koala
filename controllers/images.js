
async function images(ctx) {
    const imgs = [{ show: './henry.jpeg' }, 
                    { show: './kiwi.jpeg' }, 
                    { show: './romuald.jpeg' }]
      await ctx.render('content', { imgs })
}

module.exports = images