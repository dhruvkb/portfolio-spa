import arg from 'arg'

export default {
  computed: {
    args () {
      // Generate 'arg' compliant argument specification
      const argSpec = this.$options.argSpec
      const spec = {}

      argSpec.kwargs.forEach(arg => {
        spec[arg.name] = arg.type

        if (arg.aliases) {
          arg.aliases.forEach(alias => {
            spec[alias] = arg.name
          })
        }
      })

      // Run argument parsing
      const processedArgs = arg(
        spec,
        {
          argv: this.argv,
          permissive: true
        }
      )

      // Convert back to portfolio argument specification
      const args = {}
      argSpec.kwargs.forEach(kwarg => {
        const dedashedName = kwarg.name.replace(/--/g, '')
        args[dedashedName] = processedArgs[kwarg.name]
      })
      argSpec.args.forEach(arg => {
        args[arg.name] = processedArgs._.shift() || arg.default
      })

      return args
    }
  }
}
