# Dev by Sonthaya Nongncuh, microBlock IDE
from machine import UART
from time import sleep_ms

uart = UART(2, 9600)

__old_value = [ 0 ] * 3
__pin = None

def b2i(x, y):
    return (x << 8 | y)

def read(pin):
    global __old_value, __pin

    if pin != __pin:
        uart.init(9600, bits=8, parity=None, stop=1, rx=pin, tx=-1)
        __pin = pin

    errCount = 0
    while errCount < 30:
        sleep_ms(100)
        errCount = errCount + 1
        
        packet = uart.read()
        if not packet:
            continue

        errCount = 0
        if len(packet) < 32:
            print("Packet size vaild")
            continue

        if packet[0:2] != b"\x42\x4d":
            print("Start error")
            continue

        packetSum = 0
        for index in range(30):
            packetSum += packet[index]
        packetSum = packetSum & 0xFFFF
        if packetSum != b2i(packet[30], packet[31]):
            print("Checksum error")
            continue

        for index in range(3):
            __old_value[index] = b2i(packet[(index * 2) + 0 + 10], packet[(index * 2) + 1 + 10])

        break
    
    return __old_value

