import Address from '../schemas/Address'

class AddressController {
  public async index (req: Request, res: Response): Promise<Response> {
    const address = await Address.find()
    return res.json(address)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const address = await Address.create(req.body)
    return res.json(address)
  }
}

export default new AddressController()
