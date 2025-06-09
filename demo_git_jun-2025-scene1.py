import pygame
import sys

# === Constants ===
WIDTH, HEIGHT = 563, 1000
BG_COLOR = (250, 245, 240)
TEXT_COLOR = (30, 30, 30)
BUTTON_COLOR = (100, 149, 237)
BUTTON_HOVER_COLOR = (70, 130, 180)
BUTTON_TEXT_COLOR = (255, 255, 255)

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Scene 1: Git Intro")
font = pygame.font.SysFont("Arial", 28)
large_font = pygame.font.SysFont("Arial", 36, bold=True)

# === Button Setup ===
button_rect = pygame.Rect(WIDTH//2 - 100, HEIGHT - 120, 200, 50)

def draw_intro_scene():
    screen.fill(BG_COLOR)

    # Title
    title = large_font.render("Confused by Git branches?", True, TEXT_COLOR)
    screen.blit(title, (WIDTH//2 - title.get_width()//2, 40))

    # Problem Examples
    typo1 = font.render("feature/imissyou", True, (220, 20, 60))
    typo2 = font.render("addvoicefordemo", True, (220, 20, 60))
    arrows = font.render("Rebase? Pull? Merge?", True, (90, 90, 90))

    screen.blit(typo1, (WIDTH//2 - typo1.get_width()//2, 200))
    screen.blit(typo2, (WIDTH//2 - typo2.get_width()//2, 240))
    screen.blit(arrows, (WIDTH//2 - arrows.get_width()//2, 290))

    # Sad Face
    pygame.draw.circle(screen, (255, 204, 204), (WIDTH//2, 400), 60)
    pygame.draw.circle(screen, (0, 0, 0), (WIDTH//2 - 20, 380), 6)
    pygame.draw.circle(screen, (0, 0, 0), (WIDTH//2 + 20, 380), 6)
    pygame.draw.arc(screen, (0, 0, 0), (WIDTH//2 - 25, 410, 50, 20), 3.14, 2*3.14, 2)

    # Action Button
    mouse_pos = pygame.mouse.get_pos()
    if button_rect.collidepoint(mouse_pos):
        pygame.draw.rect(screen, BUTTON_HOVER_COLOR, button_rect, border_radius=10)
    else:
        pygame.draw.rect(screen, BUTTON_COLOR, button_rect, border_radius=10)

    button_text = font.render("Start Recording", True, BUTTON_TEXT_COLOR)
    screen.blit(button_text, (button_rect.centerx - button_text.get_width()//2, 
                              button_rect.centery - button_text.get_height()//2))

running = True
while running:
    draw_intro_scene()
    pygame.display.flip()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if button_rect.collidepoint(event.pos):
                print("[ACTION] Start Recording Scene 1...")
                # Add sound fx or signal trigger here

pygame.quit()
sys.exit()

