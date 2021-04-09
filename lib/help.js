const l = 1

function help(prefix) {
	return `
	*╔❏* *BENNYBOT*
	*╠❏* *Commands*
	*╠❏* ${l++}. ➭ *${prefix}help*
	*╠❏* ${l++}. ➭ *${prefix}welcome on*
	*╠❏* ${l++}. ➭ *${prefix}welcome off*`
}
exports.help = help