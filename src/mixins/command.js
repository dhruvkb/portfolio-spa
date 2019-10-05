import arg from 'arg' // Zeit arg

export default {
  computed: {
    args () {
      // Generate 'arg' compliant argument specification
      let argSpec = this.$options.argSpec
      let spec = {}

      argSpec.kwargs.forEach(arg => {
        spec[arg.name] = arg.type

        if (arg.aliases) {
          arg.aliases.forEach(alias => {
            spec[alias] = arg.name
          })
        }
      })

      // Run argument parsing
      let processedArgs = arg(
        spec,
        {
          argv: this.argv,
          permissive: true
        }
      )

      // Convert back to portfolio argument specification
      let args = {}
      argSpec.kwargs.forEach(kwarg => {
        let dedashedName = kwarg.name.replace(/--/g, '')
        args[dedashedName] = processedArgs[kwarg.name]
      })
      argSpec.args.forEach(arg => {
        args[arg.name] = processedArgs._.shift() || arg.default
      })

      return args
    }
  }
}
